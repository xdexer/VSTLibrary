import React from "react";



export default function AppDrawer()
{


    return <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
    </Drawer>
}