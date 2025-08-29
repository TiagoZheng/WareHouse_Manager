import Button from '@mui/material/Button'
import IosShareIcon from '@mui/icons-material/IosShare';
import TextField from '@mui/material/TextField';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryDashboard from './InventoryDashboard';

{/** Head TIttle */}
const headTittle = (
  <>
    {/* Head Text*/}
    <p className=" text-2xl font-bold">
      Inventory <br /> 
      <span className="text-sm font-normal">Dashboard / Inventory</span>
    </p>
       
    {/* Buttons Import Export */}
      <div className="grid grid-cols-2 gap-3 items-center">
        <Button variant="outlined" className="m-3 "> 
          <IosShareIcon fontSize="small" className='mr-2'/> 
          Export
        </Button>

        <Button variant="contained">
          <IosShareIcon fontSize="small" className='mr-2'/>
          Import
        </Button>
      </div>
  </>
)


const Inventory = () => {
  return (
    <div className="flex flex-col flex-1 m-8 ">
      {/* HeadTittle */}
      <div className=" flex mb-8 justify-between ml-2">
        {headTittle}
      </div>

      {/* Inventory DashBoard */}
      <div className="flex flex-col flex-9 rounded-2xl bg-white">
        {/* Title and Seachbar */}
        <div className='flex flex-1 justify-between items-center mr-12 ml-8'>
          <p>
            <Inventory2OutlinedIcon fontSize="small" className='mr-2'/>
            Inventory
          </p>
          <TextField placeholder="Search inventory..." 
            sx={{
              '& .MuiInputBase-input': {
              padding: '10px 14px', // inner padding (top/bottom, left/right)
              }
            }}
          /> 
        </div>
        <hr className='border-gray-200 mx-4'/>

        {/* Inventort table */}
        <div className='flex-9'>
            <InventoryDashboard />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
