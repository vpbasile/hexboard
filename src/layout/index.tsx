import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import SandboxFooter from './sandboxFooter'
import SandboxHeader from './sandboxHeader'

export default function Layout() {

    return (<>
        <SandboxHeader />
        <Box id='mainBody' p={9}>
            {/* This is where the children will be rendered */}
            <Outlet />
        </Box>
        <SandboxFooter />
    </>)
}