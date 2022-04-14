using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ProjetoPV_Angular.Models;

namespace ProjetoPV_Angular.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //Popular Entidade Cliente
            #region Dados Cliente
            builder.Entity<Cliente>().HasData(
                new Cliente {ClienteId = 1},
                new Cliente {ClienteId = 2},
                new Cliente {ClienteId = 3}
                );
            #endregion

            //Popular Entidade TipoConta
            #region Dados TipoConta
            builder.Entity<TipoConta>().HasData(
                    new TipoConta
                    {
                        TipoContaId = 1,
                        Descricao = TipoContaDescricao.Geral
                    },
                    new TipoConta
                    {
                        TipoContaId = 2,
                        Descricao = TipoContaDescricao.ContaAtual
                    },
                    new TipoConta
                    {
                        TipoContaId = 3,
                        Descricao = TipoContaDescricao.CartãoCrédito
                    },
                    new TipoConta
                    {
                        TipoContaId = 4,
                        Descricao = TipoContaDescricao.Dinheiro
                    },
                    new TipoConta
                    {
                        TipoContaId = 5,
                        Descricao = TipoContaDescricao.Empréstimo
                    },
                    new TipoConta
                    {
                        TipoContaId = 6,
                        Descricao = TipoContaDescricao.Hipoteca
                    },
                    new TipoConta
                    {
                        TipoContaId = 7,
                        Descricao = TipoContaDescricao.Investimento
                    },
                    new TipoConta
                    {
                        TipoContaId = 8,
                        Descricao = TipoContaDescricao.Seguro
                    },
                    new TipoConta
                    {
                        TipoContaId = 9,
                        Descricao = TipoContaDescricao.Bónus
                    },
                    new TipoConta
                    {
                        TipoContaId = 10,
                        Descricao = TipoContaDescricao.ContaPoupança
                    }
                    );
            #endregion

            //Popular Entidade Conta
            #region Dados Conta
            builder.Entity<Conta>().HasData(
                new Conta
                {
                    ContaId = 1,
                    Descricao = "Conta 1",
                    Moeda = "EUR",
                    Saldo = 349,
                    TipoContaId = 1
                },
                new Conta
                {
                    ContaId = 2,
                    Descricao = "Conta 2",
                    Moeda = "EUR",
                    Saldo = 12,
                    TipoContaId = 2
                },
                new Conta
                {
                    ContaId = 3,
                    Descricao = "Conta 3",
                    Moeda = "EUR",
                    Saldo = 2199,
                    TipoContaId = 2
                }) ; 
            #endregion

            //Popular Entidade Categoria
            #region Dados Categoria
            builder.Entity<Categoria>().HasData(
                    new Categoria
                    {
                        CategoriaId = 1,
                        Nome = "Transportes",
                        Descricao = "Categoria destinada a gastos com transportes."
                    },
                    new Categoria
                    {
                        CategoriaId = 2,
                        Nome = "Comida e Bebida",
                        Descricao = "Categoria destinada a gastos com alimentação."
                    },
                    new Categoria
                    {
                        CategoriaId = 3,
                        Nome = "Supermercado",
                        Descricao = "Categoria destinada a gastos no supermercado."
                    },
                    new Categoria
                    {
                        CategoriaId = 4,
                        Nome = "Habitação",
                        Descricao = "Categoria destinada a gastos com a habitação."
                    });
            #endregion

            //Popular Entidade TipoTransacao
            #region Dados TipoTransacao
            builder.Entity<TipoTransacao>().HasData(
                    new TipoTransacao
                    {
                        TipoTransacaoId = 1,
                        Descricao = TipoTransacaoDescricao.Receita
                    },
                    new TipoTransacao
                    {
                        TipoTransacaoId = 2,
                        Descricao = TipoTransacaoDescricao.Despesa
                    },
                    new TipoTransacao
                    {
                        TipoTransacaoId = 3,
                        Descricao = TipoTransacaoDescricao.Transacao
                    }
                    );
            #endregion

            //Popular Entidade Transacao
            #region Dados Transacao
            builder.Entity<Transacao>().HasData(
                new Transacao
                {
                    TransacaoId = 1,
                    ContaOrigemId = 1,
                    ContaDestinoId = 2,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 1",
                    Moeda = "EUR",
                    Valor = 500,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 1
                },
                new Transacao
                {
                    TransacaoId = 2,
                    ContaOrigemId = 2,
                    ContaDestinoId = 1,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 2",
                    Moeda = "EUR",
                    Valor = 300,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2
                },
                new Transacao
                {
                    TransacaoId = 3,
                    ContaOrigemId = 2,
                    ContaDestinoId = 1,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 3",
                    Moeda = "EUR",
                    Valor = 900,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2
                },
                new Transacao
                {
                    TransacaoId = 4,
                    ContaOrigemId = 2,
                    ContaDestinoId = 1,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 4",
                    Moeda = "EUR",
                    Valor = 1500,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2
                });
            #endregion
        }

        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<TipoConta> TipoConta { get; set; }
        public DbSet<TipoTransacao> TipoTransacao { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Conta> Conta { get; set; }
        public DbSet<ProjetoPV_Angular.Models.ContaClientes> ContaClientes { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Objetivo> Objetivo { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Orcamento> Orcamento { get; set; }
        public DbSet<ProjetoPV_Angular.Models.OrcamentoContas> OrcamentoContas { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Transacao> Transacao { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Utilizador> Utilizador { get; set; }
    }
}