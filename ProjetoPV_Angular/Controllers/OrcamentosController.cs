#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoPV_Angular.Data;
using ProjetoPV_Angular.Models;

namespace ProjetoPV_Angular.Controllers
{
    public class CustomOrcamento : Orcamento
    {
        public double Restante { get; set; }
        public double Gasto { get; set; }
        public CustomOrcamento() : base() { }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class OrcamentosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrcamentosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Orcamentos/Tb2
        [HttpGet("Tb2")]
        public ActionResult<IEnumerable<CustomOrcamento>> GetOrcamentoTb2()
        {
            var orcamentoTb1 = _context.Orcamento.ToList();

            var orcamentoConta = orcamentoTb1.Join(_context.OrcamentoContas,
                                                   orca => orca.OrcamentoId,
                                                   orcc => orcc.OrcamentoId,
                                                   (orca, orcc) => new { orcaId = orcc.OrcamentoId,
                                                                         contId = orcc.ContaId,
                                                                         orcaIn = orca.DataInicio,
                                                                         orcaFi = orca.DataFim});
            
            var transacaoConta = orcamentoConta.Join(_context.Transacao.Where(t => t.TipoTransacaoId == 3),
                                                       orcamentoConta => orcamentoConta.contId,
                                                       tran           => tran.ContaOrigemId,
                                                       (orcamentoConta, tran) => new { tranId = tran.TransacaoId,
                                                                                       tranVa = tran.Valor,
                                                                                       tranDt = tran.DataTransacao,
                                                                                       contId = tran.ContaOrigemId,
                                                                                       orcaId = orcamentoConta.orcaId,
                                                                                       orcaIn = orcamentoConta.orcaIn,
                                                                                       orcaFi = orcamentoConta.orcaFi });

            transacaoConta = transacaoConta.Where(t => t.tranDt >= t.orcaIn && t.tranDt < t.orcaFi);

            foreach (var obj in transacaoConta)
            {

                Console.WriteLine("tranID:{0} - tranVa:{1} - contId:{2} - orcaId:{3}", obj.tranId, obj.tranVa, obj.contId, obj.orcaId);
            }

            foreach (var obj in orcamentoConta)
            {

                Console.WriteLine("{0} - {1}", obj.orcaId, obj.contId);
            }

            var orcamentos = new List<CustomOrcamento>();
            foreach (var c in orcamentoTb1)
            {
                var orcamentoGasto = transacaoConta.Where(o => o.orcaId == c.OrcamentoId).Sum(d => d.tranVa);

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
                });
            }

            return orcamentos.ToList();
        }



        // GET: api/Orcamentoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orcamento>>> GetOrcamento()
        {
            return await _context.Orcamento.ToListAsync();
        }

        // GET: api/Orcamentoes/5
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
        public async Task<ActionResult<Orcamento>> PostOrcamento(Orcamento orcamento)
        {
            _context.Orcamento.Add(orcamento);
            await _context.SaveChangesAsync();

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
