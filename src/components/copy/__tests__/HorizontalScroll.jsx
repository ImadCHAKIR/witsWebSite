import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Part2 from './Part2';
import { createStyles } from '@mui/material';
import { styled } from '@mui/material/styles';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function HorizontalScroll(props) {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div className="flex flex-row overflow-hidden">
          {props.data.map((data)=>{
            return <Part2 img={data.img} title={data.title} text={data.txt}/>
          })}
          {props.data.map((data)=>{
            return <Part2 img={data.img} title={data.title} text={data.txt}/>
          })}
          {props.data.map((data)=>{
            return <Part2 img={data.img} title={data.title} text={data.txt}/>
          })}
    </div>
    
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </div>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

export default HorizontalScroll;