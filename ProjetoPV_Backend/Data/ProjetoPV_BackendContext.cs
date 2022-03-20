using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjetoPV_Backend.Models;

namespace ProjetoPV_Backend.Data
{
    public class ProjetoPV_BackendContext : DbContext
    {
        public ProjetoPV_BackendContext (DbContextOptions<ProjetoPV_BackendContext> options)
            : base(options)
        {
        }

        // Dados pré-definidos
        protected override void OnModelCreating(ModelBuilder builder)
        {
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
        }


        public DbSet<ProjetoPV_Backend.Models.Categoria> Categoria { get; set; }
        public DbSet<ProjetoPV_Backend.Models.TipoConta> TipoConta { get; set; }
        public DbSet<ProjetoPV_Backend.Models.TipoTransacao> TipoTransacao { get; set; }
        public DbSet<ProjetoPV_Backend.Models.Cliente> Cliente { get; set; }
    }
}
