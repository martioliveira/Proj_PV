#nullable disable
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

namespace ProjetoPV_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public ContasController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/Contas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Conta>>> GetConta()
        {
            return await _context.Conta.ToListAsync();
        }

        // GET: api/Contas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Conta>> GetConta(long id)
        {
            var conta = await _context.Conta.FindAsync(id);

            if (conta == null)
            {
                return NotFound();
            }

            return conta;
        }

        // GET: api/Contas/Transacoes/5
        [HttpGet]
        [Route("Transacoes/{id}")]
        public async Task<ActionResult<IEnumerable<Transacao>>> GetContaTransacoes(long id)
        {
            var conta = await _context.Conta.FindAsync(id);
            
            if (conta == null)
            {
                return NotFound();
            }

            var transacoes = await _context.Transacao.
                Where(t => t.ContaOrigemId == id || t.ContaDestinoId == id).ToListAsync();

            return transacoes;
        }

        // PUT: api/Contas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConta(long id, Conta conta)
        {
            if (id != conta.ContaId)
            {
                return BadRequest();
            }

            _context.Entry(conta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContaExists(id))
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

        // POST: api/Contas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Conta>> PostConta(Conta conta)
        {
            _context.Conta.Add(conta);
            await _context.SaveChangesAsync();

            var user = await _userManager.FindByIdAsync(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if (user != null)
            {
                ContaClientes contaClientes = new ContaClientes()
                { ContaId = conta.ContaId,
                  ApplicationUserId = user.Id
                };
                _context.ContaClientes.Add(contaClientes);
                await _context.SaveChangesAsync();
            }

            return CreatedAtAction("GetConta", new { id = conta.ContaId }, conta);
        }

        // DELETE: api/Contas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConta(long id)
        {
            var conta = await _context.Conta.FindAsync(id);
            if (conta == null)
            {
                return NotFound();
            }

            _context.Conta.Remove(conta);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContaExists(long id)
        {
            return _context.Conta.Any(e => e.ContaId == id);
        }
    }
}
