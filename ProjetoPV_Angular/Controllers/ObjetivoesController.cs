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
    public class PatchStructure
    {
        public double ValorAdd { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ObjetivoesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ObjetivoesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Objetivoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Objetivo>>> GetObjetivo()
        {
            return await _context.Objetivo.ToListAsync();
        }

        // GET: api/Objetivoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Objetivo>> GetObjetivo(long id)
        {
            var objetivo = await _context.Objetivo.FindAsync(id);

            if (objetivo == null)
            {
                return NotFound();
            }

            return objetivo;
        }

        // PUT: api/Objetivoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutObjetivo(long id, Objetivo objetivo)
        {
            if (id != objetivo.ObjetivoId)
            {
                return BadRequest();
            }

            _context.Entry(objetivo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ObjetivoExists(id))
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


        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchObjetivo(long id, PatchStructure patchStructure)
        {
            if (patchStructure.ValorAdd <= 0)
            {
                return BadRequest();
            }

            var objetivo = await _context.Objetivo.FindAsync(id);

            if (objetivo == null)
            {
                return NotFound();
            }

            objetivo.ValorAcumulado += patchStructure.ValorAdd;

            _context.Entry(objetivo).State = EntityState.Modified;

            await _context.SaveChangesAsync();
            
            return NoContent();
        }


        // POST: api/Objetivoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Objetivo>> PostObjetivo(Objetivo objetivo)
        {
            _context.Objetivo.Add(objetivo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetObjetivo", new { id = objetivo.ObjetivoId }, objetivo);
        }

        // DELETE: api/Objetivoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteObjetivo(long id)
        {
            var objetivo = await _context.Objetivo.FindAsync(id);
            if (objetivo == null)
            {
                return NotFound();
            }

            _context.Objetivo.Remove(objetivo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ObjetivoExists(long id)
        {
            return _context.Objetivo.Any(e => e.ObjetivoId == id);
        }
    }
}
