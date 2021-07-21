import { useLoading } from '../../Context/Loading'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));





export function Spinner(){
    
    const {loadingView} = useLoading();
    const classes=useStyles();

    return (
        <div>
            {loadingView?loadingView : 
                <Backdrop className={classes.backdrop} open>
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
        </div>
    );
}