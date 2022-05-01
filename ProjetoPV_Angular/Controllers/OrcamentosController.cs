﻿#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoPV_Angular.Data;
using ProjetoPV_Angular.Models;
using ProjetoPV_Angular.Services;

namespace ProjetoPV_Angular.Controllers
{
    public class CustomOrcamento : Orcamento
    {
        public double Restante { get; set; }
        public double Gasto { get; set; }
        public double Percentagem { get; set; }
        public double Percentager { get; set; }
        public Transacao[] Transorca { get; set; }
        public CustomOrcamento() : base() { }
    }

    public class CreateOrcamento : Orcamento
    {
        public long ContaId { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrcamentosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public OrcamentosController(ApplicationDbContext context, UserManager<ApplicationUser> userManager) {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/Orcamentos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orcamento>>> GetOrcamento()
        {
            var queryable = _context.Orcamento.AsQueryable();

            // Filtrar por user logado
            if (ControllerHelper.IsUser(User))
            {
                var userId = ControllerHelper.Id(User);
                queryable = queryable.Where(o => o.ApplicationUserId == userId);
            }

            return await queryable.ToListAsync();
        }

        // GET: api/Orcamentos/Tb2 (Versão Custom)
        [HttpGet("Tb2")]
        public ActionResult<IEnumerable<CustomOrcamento>> GetOrcamentoTb2() {
            var queryableOrcamentoTb1 = _context.Orcamento.AsQueryable();

            // Filtrar por user logado
            if (ControllerHelper.IsUser(User))
            {
                var userId = ControllerHelper.Id(User);
                queryableOrcamentoTb1 = queryableOrcamentoTb1.Where(o => o.ApplicationUserId == userId);
            }

            var orcamentoTb1 = queryableOrcamentoTb1.ToList();                     
            // Através da lista de Orçamentos fazer join à tabela de contas
            var orcamentoConta = orcamentoTb1.Join(_context.OrcamentoContas,    
                                                   orca => orca.OrcamentoId,
                                                   orcc => orcc.OrcamentoId,
                                                   (orca, orcc) => new { orcaId = orcc.OrcamentoId,
                                                                         contId = orcc.ContaId,
                                                                         orcaIn = orca.DataInicio,
                                                                         orcaFi = orca.DataFim});

            // Após obter o join Orçamentos/Contas obter todas as transações tipo = "Despesas" com um join à tabela de Transações 
            var transacaoConta = orcamentoConta.Join(_context.Transacao.Where(t => t.TipoTransacaoId == 3), orcamentoConta => orcamentoConta.contId,                   
                                                                                                            tran           => tran.ContaOrigemId,
                                                                                                            (orcamentoConta, tran) => new { tranId = tran.TransacaoId,
                                                                                                                                            tranVa = tran.Valor,
                                                                                                                                            tranDt = tran.DataTransacao,
                                                                                                                                            contId = tran.ContaOrigemId,
                                                                                                                                            orcaId = orcamentoConta.orcaId,
                                                                                                                                            orcaIn = orcamentoConta.orcaIn,
                                                                                                                                            orcaFi = orcamentoConta.orcaFi });
            // Apanhar as transações apenas dentro das datas de Inicio de Fim de Orçamento
            transacaoConta = transacaoConta.Where(t => t.tranDt >= t.orcaIn && t.tranDt < t.orcaFi);

            // Processar os orçamentos
            var orcamentos = new List<CustomOrcamento>();
            foreach (var c in orcamentoTb1)
            {
                // Calcular o valor já gasto do orçamento com o somatório de todas as transações
                var orcamentoGasto = transacaoConta.Where(o => o.orcaId == c.OrcamentoId).Sum(d => d.tranVa);
                // Mapeamento da tabela interna
                orcamentos.Add(new CustomOrcamento()
                {
                    OrcamentoId = c.OrcamentoId,
                    DataInicio  = c.DataInicio,
                    DataFim     = c.DataFim,
                    Descricao   = c.Descricao,
                    Valor       = c.Valor,
                    Moeda       = c.Moeda,
                    Restante    = c.Valor - orcamentoGasto,
                    Gasto       = orcamentoGasto,
                    Percentager = 100 - (((1 * orcamentoGasto) / c.Valor) * 100),
            });
            }

            return orcamentos.ToList();
        }

        // GET: api/Orcamentos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Orcamento>> GetOrcamento(long id)
        {
            var orcamento = await _context.Orcamento.FindAsync(id);

            if (orcamento == null)
            {
                return NotFound();
            }

            return orcamento;
        }        
        
        // GET: api/Orcamentoes/Tb2/5 (Versão Custom)
        [HttpGet("Tb2/{id}")]
        public ActionResult<Orcamento> GetOrcamentoId(long id) {
            // Obter o orçamento pelo Id clicado
            var orcamento = _context.Orcamento.Find(id);

            if (orcamento == null)
            {
                return NotFound();
            }

            // Através da lista de Orçamento fazer join à tabela de contas onde o Id é o mesmo
            var orcamentoConta = _context.Orcamento.Where(o => o.OrcamentoId == id).
                                                     Join(_context.OrcamentoContas,
                                                           orca => orca.OrcamentoId,
                                                           orcc => orcc.OrcamentoId,
                                                           (orca, orcc) => new {
                                                               orcaId = orcc.OrcamentoId,
                                                               contId = orcc.ContaId,
                                                               orcaIn = orca.DataInicio,
                                                               orcaFi = orca.DataFim     });

            // Após obter o join Orçamentos/Contas obter todas as transações tipo = "Despesas" com um join à tabela de Transações 
            var transacaoConta = orcamentoConta.Join(_context.Transacao.Where(t => t.TipoTransacaoId == 3),
                                                       orcamentoConta => orcamentoConta.contId,
                                                       tran => tran.ContaOrigemId,
                                                       (orcamentoConta, tran) => new {
                                                           tranId = tran.TransacaoId,
                                                           tranVa = tran.Valor,
                                                           tranDt = tran.DataTransacao,
                                                           contId = tran.ContaOrigemId,
                                                           orcaId = orcamentoConta.orcaId,
                                                           orcaIn = orcamentoConta.orcaIn,
                                                           orcaFi = orcamentoConta.orcaFi });

            //var transacaoOrcam = transacaoConta.Join(_context.Transacao,
            //                                            traCo => traCo.tranId,
            //                                            trans => trans.TransacaoId,
            //                                            trans => new { });

            var transacaoOrcam = _context.Transacao.Where(x => transacaoConta.Any(y => x.TransacaoId == y.tranId));


            // Apanhar as transações apenas dentro das datas de Inicio de Fim de Orçamento
            transacaoConta = transacaoConta.Where(t => t.tranDt >= t.orcaIn && t.tranDt < t.orcaFi);
            // Calcular o valor já gasto do orçamento com o somatório de todas as transações
            var orcamentoGasto = transacaoConta.Where(o => o.orcaId == orcamento.OrcamentoId).Sum(d => d.tranVa);
            var orcamentoResta = orcamento.Valor - orcamentoGasto;
            var percentagem    = ((1 * orcamentoGasto) / orcamento.Valor) * 100;
                // Mapeamento da tabela interna
                var orcamentoCustom = new CustomOrcamento { OrcamentoId = orcamento.OrcamentoId,
                                                            DataInicio  = orcamento.DataInicio,
                                                            DataFim     = orcamento.DataFim,
                                                            Descricao   = orcamento.Descricao,
                                                            Valor       = orcamento.Valor,
                                                            Moeda       = orcamento.Moeda,
                                                            Restante    = orcamentoResta,
                                                            Gasto       = orcamentoGasto,
                                                            Percentagem = percentagem,
                                                            Transorca   = transacaoOrcam.Include(t=>t.Categoria).ToArray() };

            //               Console.WriteLine("{0} {1} {2} {3}", orcamentoCustom.Restante ,orcamentoCustom.Gasto ,orcamentoCustom.Percentagem, orcamentoCustom.Percentager);

            return orcamentoCustom;
        }

        // PUT: api/Orcamentoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrcamento(long id, Orcamento orcamento)
        {
            if (id != orcamento.OrcamentoId)
            {
                return BadRequest();
            }

            _context.Entry(orcamento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrcamentoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Orcamentoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Orcamento>> PostOrcamento(CreateOrcamento orcamento)
        {
            using var transaction = _context.Database.BeginTransaction();

            // Popular ApplicationUserId no orçamento
            var userClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userClaim != null)
            {
                var userId = userClaim.Value;
                var user = await _userManager.FindByIdAsync(userId);
                if (user != null)
                {
                    orcamento.ApplicationUserId = user.Id;
                }
            }

            _context.Orcamento.Add(orcamento);
            await _context.SaveChangesAsync();

            OrcamentoContas orcamentoContas = new OrcamentoContas();
            orcamentoContas.OrcamentoId = orcamento.OrcamentoId;
            orcamentoContas.ContaId = orcamento.ContaId;
            _context.OrcamentoContas.Add(orcamentoContas);
            await _context.SaveChangesAsync();

            transaction.Commit();

            return CreatedAtAction("GetOrcamento", new { id = orcamento.OrcamentoId }, orcamento);
        }

        // DELETE: api/Orcamentoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrcamento(long id)
        {
            var orcamento = await _context.Orcamento.FindAsync(id);
            if (orcamento == null)
            {
                return NotFound();
            }

            _context.Orcamento.Remove(orcamento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrcamentoExists(long id)
        {
            return _context.Orcamento.Any(e => e.OrcamentoId == id);
        }
    }
}
