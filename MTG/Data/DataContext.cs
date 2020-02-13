using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MTG.Models;
namespace MTG.Data
{
	public class DataContext:DbContext
	{
		public DataContext(DbContextOptions<DataContext> options): base(options)
		{

		}
		public DbSet<Card> Cards { get; set; } 
		public DbSet<Deck> Decks { get; set; }
		public DbSet<CardDeck> CardDecks{ get; set; }
	}
}
