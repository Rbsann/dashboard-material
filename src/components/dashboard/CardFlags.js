import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import PieChartIcon from '@material-ui/icons/PieChart';


const TasksProgress = (props) => (
  <Card
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item lg={12}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Bandeiras mais utilizadas
          </Typography>
        </Grid>
        <Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            Visa
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            60%
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            MasterCard
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            30%
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            Outros
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            10%
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TasksProgress;
