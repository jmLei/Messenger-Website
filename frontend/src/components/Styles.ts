import { makeStyles } from '@material-ui/core';

const drawerAppBarHeight = 70;
const drawerWidth = 360;

const useStyles = makeStyles({
    appBar: {
        height: drawerAppBarHeight
    },
    chatList: {
        height: `calc(100% - ${drawerAppBarHeight} - ${drawerAppBarHeight}px)`,
        width: '100%',
        overflow: 'auto'
    },
    drawerPaper: {
        width: drawerWidth
    },
    permanentDrawer: {
        position: 'static',
        width: drawerWidth
    },
    temporaryDrawer: {
        position: 'absolute',
        width: drawerWidth
    }
});

export default useStyles;
