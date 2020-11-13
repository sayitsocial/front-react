import React from 'react';
import Demo from '../components/Page1/DemoComponent'
import Retard from '../components/Page1/RetardComponent'


class DemoPage extends React.Component {
  render() {
      return (
          <>
              <Demo></Demo>
              <Retard></Retard>
          </>
      );
  }
}

export default DemoPage;