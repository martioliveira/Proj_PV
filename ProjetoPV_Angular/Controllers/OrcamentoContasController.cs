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
    public class OrcamentoContasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrcamentoContasController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/OrcamentoContas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrcamentoContas>>> GetOrcamentoContas()
        {
            return await _context.OrcamentoContas.ToListAsync();
        }

        // GET: api/OrcamentoContas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrcamentoContas>> GetOrcamentoContas(long id)
        {
            var orcamentoContas = await _context.OrcamentoContas.FindAsync(id);

            if (orcamentoContas == null)
            {
                return NotFound();
            }

            return orcamentoContas;
        }

        // PUT: api/OrcamentoContas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrcamentoContas(long id, OrcamentoContas orcamentoContas)
        {
            if (id != orcamentoContas.OrcamentoContasId)
            {
                return BadRequest();
            }

            _context.Entry(orcamentoContas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrcamentoContasExists(id))
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

        // POST: api/OrcamentoContas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OrcamentoContas>> PostOrcamentoContas(OrcamentoContas orcamentoContas)
        {
            _context.OrcamentoContas.Add(orcamentoContas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrcamentoContas", new { id = orcamentoContas.OrcamentoContasId }, orcamentoContas);
        }

        // DELETE: api/OrcamentoContas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrcamentoContas(long id)
        {
            var orcamentoContas = await _context.OrcamentoContas.FindAsync(id);
            if (orcamentoContas == null)
            {
                return NotFound();
            }

            _context.OrcamentoContas.Remove(orcamentoContas);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrcamentoContasExists(long id)
        {
            return _context.OrcamentoContas.Any(e => e.OrcamentoContasId == id);
        }
    }
}
