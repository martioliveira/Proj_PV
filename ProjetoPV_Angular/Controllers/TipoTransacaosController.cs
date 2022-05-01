#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoPV_Angular.Data;
using ProjetoPV_Angular.Models;

namespace ProjetoPV_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TipoTransacaosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TipoTransacaosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/TipoTransacaos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoTransacao>>> GetTipoTransacao()
        {
            return await _context.TipoTransacao.ToListAsync();
        }

        // GET: api/TipoTransacaos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoTransacao>> GetTipoTransacao(long id)
        {
            var tipoTransacao = await _context.TipoTransacao.FindAsync(id);

            if (tipoTransacao == null)
            {
                return NotFound();
            }

            return tipoTransacao;
        }

        // PUT: api/TipoTransacaos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoTransacao(long id, TipoTransacao tipoTransacao)
        {
            if (id != tipoTransacao.TipoTransacaoId)
            {
                return BadRequest();
            }

            _context.Entry(tipoTransacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoTransacaoExists(id))
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

        // POST: api/TipoTransacaos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoTransacao>> PostTipoTransacao(TipoTransacao tipoTransacao)
        {
            _context.TipoTransacao.Add(tipoTransacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoTransacao", new { id = tipoTransacao.TipoTransacaoId }, tipoTransacao);
        }

        // DELETE: api/TipoTransacaos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoTransacao(long id)
        {
            var tipoTransacao = await _context.TipoTransacao.FindAsync(id);
            if (tipoTransacao == null)
            {
                return NotFound();
            }

            _context.TipoTransacao.Remove(tipoTransacao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoTransacaoExists(long id)
        {
            return _context.TipoTransacao.Any(e => e.TipoTransacaoId == id);
        }
    }
}
