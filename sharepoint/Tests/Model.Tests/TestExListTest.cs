namespace Model.Tests
{
	using System;
	using DTO;
	using FizzWare.NBuilder;
	using Microsoft.VisualStudio.TestTools.UnitTesting;


	[TestClass]
	public class TestExListTest
	{
		[TestMethod]
		public void TestExList()
		{
			Builder < MyItemDTO >.CreateListOfSize ( 10 )
				.All ( )
				.With ( x => x.Title = "some title" )
				.Build ( );
		}
	}
}
