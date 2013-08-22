namespace PresentationLayer
{
	using System.Linq;
	using Interfaces;
	using Microsoft.SharePoint;

	public class MyControlsPresenter
	{
		private IDataList _view;

		private MyControlsPresenter ( ) { }

		public MyControlsPresenter ( IDataList view )
		{
			_view = view;
		}

		public void Populate ( )
		{
			var web = SPContext.Current.Web;

			var list = web.Lists [ "TestExList" ];

			var items = list.Items.Cast < SPListItem > ( ).Select ( s => s.Title );

			_view.DisplayData = items;
		}
	}
}
