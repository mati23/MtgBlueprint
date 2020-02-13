using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MTG.Models
{
	public class CardDeck
	{
		public int Id { get; set; }
		public string CardId { get; set; }
		public int DeckId { get; set; }
	}
}
