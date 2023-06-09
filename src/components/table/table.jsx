import React from 'react';
import TableRow from "./table-row";

const Table = (props) => {
    return (
        <div>
            <ul className="list-group">
                {props.answers.map((elem, key) => {
                    return (
                        <TableRow
                            key={key}
                            checkAnswer={props.checkAnswer}
                            text={elem}
                            currentKey={key}
                            markedAnswer={props.markedAnswer}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Table;
