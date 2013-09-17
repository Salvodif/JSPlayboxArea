namespace Model
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;
	using DTOs;
	using Microsoft.SharePoint;

	public class TestExList
	{
		private TestExList ( ) { }

		public static IEnumerable < TestExDTO > GetItems ( )
		{
			var web = SPContext.Current.Web;

			var list = web.Lists [ "TestExList" ];

			var items = list.Items.Cast < SPListItem > ( ).Select ( s => s );

			return items.Select ( spListItem => new TestExDTO
												{
													Title = spListItem.Title
												} ).ToList ( );
		}
	}
}
