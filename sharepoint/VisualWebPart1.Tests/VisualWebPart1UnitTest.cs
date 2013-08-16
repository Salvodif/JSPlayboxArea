namespace VisualWebPart1.Tests
{
	using System;
	using Microsoft.QualityTools.Testing.Emulators;
	using Microsoft.SharePoint.Emulators;
	using Microsoft.VisualStudio.TestTools.UnitTesting;

	[ TestClass ]
	public class VisualWebPart1UnitTest
	{
		[ TestMethod ]
		public void TestMethod1 ( )
		{
			using ( new SharePointEmulationScope ( EmulationMode.Enabled ) )
			{
				//var vwp = new VisualWebPart1 ( );

			}
		}
	}
}
