import RowWrapper from "./partials/row-wrapper";
import Box from "./partials/box";

const Mobile = ({ colors, changeColor }) => {
  return (
    <div className="container mobile">
      <RowWrapper>
        <div className="col-12 row">
          <Box color={colors[0]} onClick={changeColor} text="1" />
        </div>
        <div className="col row">
          <div className="col">
            <Box color={colors[2]} onClick={changeColor} text="3" />
          </div>
          <div className="col">
            <Box color={colors[3]} onClick={changeColor} text="4" />
          </div>
          <div className="col-12">
            <Box color={colors[1]} onClick={changeColor} text="2" />
          </div>
        </div>
      </RowWrapper>
      <RowWrapper>
        <div className="col-12 row">
          <Box color={colors[6]} onClick={changeColor} text="7" />
        </div>
        <div className="col-12 row">
          <div className="col">
            <Box color={colors[4]} onClick={changeColor} text="5" />
          </div>
          <div className="col">
            <Box color={colors[7]} onClick={changeColor} text="8" />
          </div>
        </div>
        <div className="col-12 row">
          <div className="col">
            <Box color={colors[5]} onClick={changeColor} text="6" />
          </div>
          <div className="col">
            <Box color={colors[8]} onClick={changeColor} text="9" />
          </div>
        </div>
      </RowWrapper>
    </div>
  );
};

export default Mobile;
