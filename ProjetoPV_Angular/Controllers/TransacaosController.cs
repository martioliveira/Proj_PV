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
    [Route("api/[controller]")]
    [ApiController]
    public class TransacaosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TransacaosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Transacaos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transacao>>> GetTransacoes([FromQuery] string ContaId,
            [FromQuery] string TipoTransacaoId, [FromQuery] string CategoriaId, [FromQuery] string DataInicio, [FromQuery] string DataFim)
        {
            var query = _context.Transacao.AsQueryable();

            // Filtrar por conta
            if (!string.IsNullOrEmpty(ContaId))
            {
                if (long.TryParse(ContaId, out var convertedContaId))
                {
                    query = query.Where(t => t.ContaOrigemId == convertedContaId || t.ContaDestinoId == convertedContaId);
                }
            }

            // Filtrar por tipo de transação
            if (!string.IsNullOrEmpty(TipoTransacaoId))
            {
                if (long.TryParse(TipoTransacaoId, out var convertedTipoTransacaoId))
                {
                    query = query.Where(t => t.TipoTransacaoId == convertedTipoTransacaoId);
                }
            }

            // Filtrar por categoria
            if (!string.IsNullOrEmpty(CategoriaId))
            {
                if (long.TryParse(CategoriaId, out var convertedCategoriaId))
                {
                    query = query.Where(t => t.CategoriaId == convertedCategoriaId);
                }
            }

            // Filtrar por data início
            if (!string.IsNullOrEmpty(DataInicio))
            {
                if (DateTime.TryParse(DataInicio, out var convertedDataInicio))
                {
                    query = query.Where(t => t.DataTransacao >= convertedDataInicio);
                }
            }

            // Filtrar por data fim
            if (!string.IsNullOrEmpty(DataFim))
            {
                if (DateTime.TryParse(DataFim, out var convertedDataFim))
                {
                    query = query.Where(t => t.DataTransacao <= convertedDataFim);
                }
            }

            return await query.Include(t => t.TipoTransacao).Include(t => t.Categoria).ToListAsync();
        }

        // GET: api/Transacaos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transacao>> GetTransacao(long id)
        {
            var transacao = await _context.Transacao.Include(t => t.Categoria).FirstAsync(c => c.TransacaoId == id);

            if (transacao == null)
            {
                return NotFound();
            }

            return transacao;
        }

        // PUT: api/Transacaos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransacao(long id, Transacao transacao)
        {
            if (id != transacao.TransacaoId)
            {
                return BadRequest();
            }

            _context.Entry(transacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransacaoExists(id))
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

        // POST: api/Transacaos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Transacao>> PostTransacao(Transacao transacao)
        {
            _context.Transacao.Add(transacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTransacao", new { id = transacao.TransacaoId }, transacao);
        }

        // DELETE: api/Transacaos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransacao(long id)
        {
            var transacao = await _context.Transacao.FindAsync(id);
            if (transacao == null)
            {
                return NotFound();
            }

            _context.Transacao.Remove(transacao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TransacaoExists(long id)
        {
            return _context.Transacao.Any(e => e.TransacaoId == id);
        }
    }
}
