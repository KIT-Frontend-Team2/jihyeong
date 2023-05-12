import React, { useState, useCallback } from "react";
import Student from "./callback/Student";

function SmartHome() {

  const [철수isHome, set철수isHome] = useState(false);
  const [영희isHome, set영희isHome] = useState(false);
  const [희철isHome, set희철isHome] = useState(false);

  const 철수LeaveHome = useCallback(() => {
    set철수isHome(!철수isHome);
  }, [철수isHome]);
  
  const 영희LeaveHome = useCallback(() => {
    set영희isHome(!영희isHome);
  }, [영희isHome]);

  const 희철LeaveHome = useCallback(() => {
    set희철isHome(!희철isHome);
  }, [희철isHome]);

  return (
    <div>
      <Student name="철수" isHome={철수isHome} action={철수LeaveHome}/>
      <Student name="영희" isHome={영희isHome} action={영희LeaveHome}/>
      <Student name="희철" isHome={희철isHome} action={희철LeaveHome}/>
    </div>
  );
}

export default SmartHome;