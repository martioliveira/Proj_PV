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
        public async Task<ActionResult<IEnumerable<Transacao>>> GetTransacao()
        {
            return await _context.Transacao.Include("TipoTransacao").Include(t=>t.Categoria).ToListAsync();
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
