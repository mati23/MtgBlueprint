using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
namespace MTG.Models
{
	[Table("decks")]
	public class Deck
	{
		
		public int Id { get; set; }
		public string Colors { get; set; }
		[Column("user_id")]
		public string UserId { get; set; }
		[Column(TypeName = "json")]
		public string Cards { get; set; }
	}
}
