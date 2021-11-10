import { useState } from "react";
import { Tabs } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab'
import { TabPane } from "react-bootstrap";

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <TabPane eventKey="home" title="Home">
        <ControlledTabs/>
      </TabPane>
      <TabPane eventKey="profile" title="Profile">
        <ControlledTabs />
      </TabPane>
      <TabPane eventKey="contact" title="Contact" disabled>
        <ControlledTabs />
      </TabPane>
    </Tabs>
  );
}

export default ControlledTabs