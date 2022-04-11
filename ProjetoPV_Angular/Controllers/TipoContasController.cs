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
    public class TipoContasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TipoContasController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/TipoContas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoConta>>> GetTipoConta()
        {
            return await _context.TipoConta.ToListAsync();
        }

        // GET: api/TipoContas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoConta>> GetTipoConta(long id)
        {
            var tipoConta = await _context.TipoConta.FindAsync(id);

            if (tipoConta == null)
            {
                return NotFound();
            }

            return tipoConta;
        }

        // PUT: api/TipoContas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoConta(long id, TipoConta tipoConta)
        {
            if (id != tipoConta.TipoContaId)
            {
                return BadRequest();
            }

            _context.Entry(tipoConta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoContaExists(id))
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

        // POST: api/TipoContas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoConta>> PostTipoConta(TipoConta tipoConta)
        {
            _context.TipoConta.Add(tipoConta);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoConta", new { id = tipoConta.TipoContaId }, tipoConta);
        }

        // DELETE: api/TipoContas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoConta(long id)
        {
            var tipoConta = await _context.TipoConta.FindAsync(id);
            if (tipoConta == null)
            {
                return NotFound();
            }

            _context.TipoConta.Remove(tipoConta);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoContaExists(long id)
        {
            return _context.TipoConta.Any(e => e.TipoContaId == id);
        }
    }
}
