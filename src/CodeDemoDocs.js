import React from 'react';

const wrapperStyle = {
  width: '100%',
};
const headerStyle = {
  fontFamily: '"Poppins", sans-serif',
  fontSize: 24,
};
const tableStyle = {
  width: '100%',
};
const tableHeaderStyle = {
  width: '100%',
};
const tableRowStyle = {
  width: '100%',
};
const nameCellStyle = {
  width: '28%',
  display: 'inline-block',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
  fontSize: 12,
  fontFamily: '"Source Sans Pro", sans-serif',
};
const defaultCellStyle = {
  width: '19%',
  display: 'inline-block',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
  fontSize: 12,
  fontFamily: '"Source Sans Pro", sans-serif',
};
const typeCellStyle = {
  width: '19%',
  display: 'inline-block',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
  fontSize: 12,
  fontFamily: '"Source Sans Pro", sans-serif',
};
const descriptionCellStyle = {
  width: '29%',
  display: 'inline-block',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
  fontSize: 12,
  fontFamily: '"Source Sans Pro", sans-serif',
};


const CodeDemoDocs = (props) => {
  const {
    propOptions,
  } = props;
  if (!propOptions) {
    return null;
  }
  return (
    <div style={wrapperStyle}>
      <h2 style={headerStyle}>Options</h2>
      {
        (propOptions) ? (
          <div style={tableStyle}>
            <div style={tableHeaderStyle}>
              <div style={nameCellStyle}>
                Prop
              </div>
              <div style={defaultCellStyle}>
                Default
              </div>
              <div style={typeCellStyle}>
                Type
              </div>
              <div style={descriptionCellStyle}>
                Description
              </div>
            </div>
            {
              (propOptions).map(opt => (
                <div style={tableRowStyle}>
                  <div style={nameCellStyle}>
                    {
                      (opt.prop) ? (
                        opt.prop
                      ) : (
                        <span />
                      )
                    }
                  </div>
                  <div style={defaultCellStyle}>
                    {
                      (opt.propDefault) ? (
                        opt.propDefault
                      ) : (
                        <span />
                      )
                    }
                  </div>
                  <div style={typeCellStyle}>
                    {
                      (opt.propType) ? (
                        opt.propType
                      ) : (
                        <span />
                      )
                    }
                  </div>
                  <div style={descriptionCellStyle}>
                    {
                      (opt.description) ? (
                        opt.description
                      ) : (
                        <span />
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <p>There are no additional props for this component.</p>
        )
      }
    </div>
  );
}

export default CodeDemoDocs;