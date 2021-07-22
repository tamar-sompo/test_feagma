
import './App.css';
import { React, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { actions } from './redux/all_actions'
import $ from 'jquery'
function App() {

  const dispatch = useDispatch()
  const arrTable = useSelector(state => state.tableReducer.arrtable);
  const reorder = (list, startIndex, endIndex) => {
    const result = [...arrTable]
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  function onDragEnd(result) {
    // dropped outside the list
    console.log(result);
    console.log("innner drag");
    if (!result.destination) {
      return;
    }
    if (result.type === "droppableItem") {
      const items = reorder(
        arrTable,
        result.source.index,
        result.destination.index
      );
      dispatch(actions.setArrtable(items))

    }

  }
  const getListStyle = isDraggingOver => ({
    // background: isDraggingOver ? "lightblue" : "lightgrey",
    // padding: grid,
    // width: 700
  });
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    // userSelect: "none",
    // padding: grid * 2,
    // margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
  });
  return (
    <div className="wrap_table d-flex align-items-center justify-content-center">
      <table className="container-fluid table " >
        <thead>
          <tr >
            <th style={{ width: "10%" }} className="title" scope="col">אפשרויות</th>
            <th style={{ width: "10%" }} className="title">סך הכל שעות</th>
            <th style={{ width: "15%" }} className="title">שעות </th>
            <th style={{ width: "15%" }} className="title">שעות ידניות</th>
            <th style={{ width: "10%" }} className="title">שעות חריגות</th>
            <th style={{ width: "25%" }} className="title">שם עובד</th>
            <th style={{ width: "15%" }} className="title">מספר ת.ז</th>
          </tr>
        </thead>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" type="droppableItem">
            {(provided, snapshot) => (
              <tbody
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {arrTable.map((item, index) => (
                  <Draggable key={index} draggableId={`${index}`} index={index}>
                    {(provided, snapshot) => (
                      // <div>
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                        {...provided.dragHandleProps}
                      >
                        <td>
                          <span className="d-flex justify-content-center" style={{ width: "50%", float: "left" }}>
                            <FontAwesomeIcon
                              icon={['fas', 'ellipsis-v']}
                            ></FontAwesomeIcon>
                          </span>
                          <span className="d-flex justify-content-center" style={{ width: "50%", float: "right" }}>
                            <FontAwesomeIcon
                              icon={['fas', 'align-center']}
                            ></FontAwesomeIcon>
                          </span>
                        </td>
                        <td className="td_content" >{item.all_hours}</td>
                        <td className="td_content">{item.hours}</td>
                        <td className="td_content">{item.Manual_hours}</td>
                        <td className="td_content">{item.Extraordinary_hours}</td>
                        <td className="td_content">
                          <span style={{ width: "11px", height: "8px", borderRadius: "50%", backgroundColor: `${item.color}`, float: "right", marginLeft: "9%" }}></span>
                          <span style={{ float: "right" }}>{item.name}</span>
                        </td>
                        <td className="td_content">{item.tz}</td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </DragDropContext>
      </table>
    </div>
  )


























  // const dropRef = useRef(null)
  // const dragPreview = useRef(null)
  // const arrTable = useSelector(state => state.tableReducer.arrtable);
  // const dispatch = useDispatch()
  // function onDragEnd(result) {
  //   debugger
  //   if (!result.destination) {
  //     return;
  //   }
  //   const items = reorder(
  //     arrTable,
  //     result.source.index,
  //     result.destination.index
  //   );
  //   dispatch(actions.setArrtable(items))
  // }
  // function reorder(list, startIndex, endIndex) {
  //   const result = [list.length]
  //   for (let index = 0; index < list.length; index++) {
  //     result[index] = list[index];
  //   }
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result;
  // };
  // const getItemStyle = (isDragging, draggableStyle) => ({
  //   color: isDragging ? 'red' : '',
  //   userSelect: 'none',
  //   padding: '5px',
  //   margin: `0`,
  //   fontSize: '15px',
  //   fontWeight: 'bold',
  //   ...draggableStyle,
  // });

  // const getListStyle = isDraggingOver => ({
  //   display: 'flex',
  //   padding: '10',
  //   overflow: 'scroll',
  //   enabled: 'false',
  // });
  // return (
  //   <>
  //     <div className="wrap_table d-flex align-items-center justify-content-center">


  //       {/* 
  //       <table className="container-fluid table  " >
  //         <thead>
  //           <tr >
  //             <th style={{ width: "10%" }} className="title" scope="col">אפשרויות</th>
  //             <th style={{ width: "10%" }} className="title">סך הכל שעות</th>
  //             <th style={{ width: "15%" }} className="title">שעות </th>
  //             <th style={{ width: "15%" }} className="title">שעות ידניות</th>
  //             <th style={{ width: "10%" }} className="title">שעות חריגות</th>
  //             <th style={{ width: "25%" }} className="title">שם עובד</th>
  //             <th style={{ width: "15%" }} className="title">מספר ת.ז</th>
  //           </tr>
  //         </thead> */}
  //       <DragDropContext onDragEnd={onDragEnd}>
  //         <Droppable droppableId="droppable" direction="horizontal">
  //           {(provided, snapshot) => (
  //             <div
  //               ref={provided.innerRef}
  //               // style={getListStyle(snapshot.isDraggingOver)}
  //               {...provided.droppableProps}
  //             >

  //               {arrTable.map((person, index) => {
  //                 return (
  //                   <Draggable key={index} draggableId={`${index}`} index={index}>
  //                     {(provided, snapshot) => (
  //                       <div
  //                         ref={provided.innerRef}
  //                         {...provided.draggableProps}
  //                         {...provided.dragHandleProps}
  //                         style={
  //                           getItemStyle(
  //                               snapshot.isDragging,
  //                               provided.draggableProps.style
  //                           )}>
  //                         {person.name}
  //                       </div >

  //                     )
  //                     }
  //                   </Draggable>
  //                 )
  //               })}


  //             </div>)}
  //         </Droppable>
  //       </DragDropContext>

  //       {/* </table> */}

  //     </div>
  //   </>
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>
  // );
}

export default App;
