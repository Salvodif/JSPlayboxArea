namespace Model.Tests
{
	using System;
	using DTOs;
	using FizzWare.NBuilder;
	using Microsoft.VisualStudio.TestTools.UnitTesting;


	[TestClass]
	public class TestExListTest
	{
		[TestMethod]
		public void TestExList()
		{
			Builder < TestExDTO >.CreateListOfSize ( 10 )
				.All ( )
				.With ( x => x.Title = "some title" )
				.Build ( );
		}
	}
}
