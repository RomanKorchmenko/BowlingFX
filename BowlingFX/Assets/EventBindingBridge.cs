using UnityEngine;
using System.Collections;
using System.Collections.Generic;
	
	public class EventBindingBridge : MonoBehaviour 
	{
		
		public MonoBehaviour targetComponent;
		public string eventName;
		
		#region Public event handlers matching dfControl events 
		
		/// <summary>
		///  definition for control multi-touch events
		/// </summary>
		/// <param name="control">The <see cref="dfControl"/> instance for which the event was generated</param>
		/// <param name="touchData"></param>
		public void ControlMultiTouchEventHandler( dfControl control, dfTouchEventArgs touchData )
		{
			fireTweenEvent();
		}
		
		/// <summary>
		///  definition for control mouse events
		/// </summary>
		/// <param name="control">The <see cref="dfControl"/> instance which is currently notified of the event</param>
		/// <param name="mouseEvent">Contains information about the user mouse operation that triggered the event</param>
		public void MouseEventHandler( dfControl control, dfMouseEventArgs mouseEvent )
		{
			fireTweenEvent();
		}
		
		/// <summary>
		///  definition for control keyboard events
		/// </summary>
		/// <param name="control">The <see cref="dfControl"/> instance for which the event was generated</param>
		/// <param name="keyEvent">Contains information about the user keyboard operation that triggered the event</param>
		public void KeyPressHandler( dfControl control, dfKeyEventArgs keyEvent )
		{
			fireTweenEvent();
		}
		
		/// <summary>
		///  definition for control drag and drop events
		/// </summary>
		/// <param name="control">The <see cref="dfControl"/> instance for which the event was generated</param>
		/// <param name="keyEvent">Contains information about the drag and drop operation that triggered the event</param>
		public void DragEventHandler( dfControl control, dfDragEventArgs dragEvent )
		{
			fireTweenEvent();
		}
		
		/// <summary>
		///  definition for control hierarchy change events
		/// </summary>
		/// <param name="container">The <see cref="dfControl"/> instance for which the event was generated</param>
		/// <param name="child">A reference to the child control that was added to or removed from the container</param>
		public void ChildControlEventHandler( dfControl container, dfControl child )
		{
			fireTweenEvent();
		}
		
		/// <summary>
		///  definition for control focus events
		/// </summary>
		/// <param name="control">The <see cref="dfControl"/> instance for which the event was generated</param>
		/// <param name="args">Contains information about the focus change event, including a reference to which control
		/// (if any) lost focus and which control (if any) obtained input focus</param>
		public void FocusEventHandler( dfControl control, dfFocusEventArgs args )
		{
			fireTweenEvent();
		}
		
		#endregion
		
		#region Private utility methods 
		
		private void fireTweenEvent()
		{
			
			if( targetComponent != null )
			{
				targetComponent.SendMessage( eventName, SendMessageOptions.DontRequireReceiver );
			}
			
		}
		
		#endregion

}