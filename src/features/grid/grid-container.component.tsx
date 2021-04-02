import React from 'react';

const GridContainer: React.FC = () => {
  const gridSize = 10;
  return (
    <React.Fragment>
      <div>
        <h2>Grid Container Component</h2>
      </div>
      <section>
        <table>
          {new Array(gridSize).fill(undefined).map((value, index) => (
            <tr key={'y' + index}>
              {new Array(gridSize).fill(undefined).map((value, index) => (
                <td key={'y' + index} className="bg-green-400 w-4 h-4 border-2"></td>
              ))}
            </tr>
          ))}
        </table>
      </section>
    </React.Fragment>
  );
};

export default GridContainer;
