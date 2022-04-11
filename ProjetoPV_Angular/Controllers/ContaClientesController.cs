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
    public class ContaClientesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ContaClientesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ContaClientes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContaClientes>>> GetContaClientes()
        {
            return await _context.ContaClientes.ToListAsync();
        }

        // GET: api/ContaClientes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContaClientes>> GetContaClientes(long id)
        {
            var contaClientes = await _context.ContaClientes.FindAsync(id);

            if (contaClientes == null)
            {
                return NotFound();
            }

            return contaClientes;
        }

        // PUT: api/ContaClientes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContaClientes(long id, ContaClientes contaClientes)
        {
            if (id != contaClientes.ContaClientesId)
            {
                return BadRequest();
            }

            _context.Entry(contaClientes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContaClientesExists(id))
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

        // POST: api/ContaClientes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ContaClientes>> PostContaClientes(ContaClientes contaClientes)
        {
            _context.ContaClientes.Add(contaClientes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContaClientes", new { id = contaClientes.ContaClientesId }, contaClientes);
        }

        // DELETE: api/ContaClientes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContaClientes(long id)
        {
            var contaClientes = await _context.ContaClientes.FindAsync(id);
            if (contaClientes == null)
            {
                return NotFound();
            }

            _context.ContaClientes.Remove(contaClientes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContaClientesExists(long id)
        {
            return _context.ContaClientes.Any(e => e.ContaClientesId == id);
        }
    }
}
