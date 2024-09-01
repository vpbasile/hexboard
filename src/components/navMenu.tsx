import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { boardList } from '../App-definitions';

export default function NavMenu() {
    let keyGen = 0;
    return ((<Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Choose a module</MenuButton>
        <MenuList>
            {boardList.map((route) => {
                keyGen++;
                return (<MenuItem key={keyGen} as={Link} to={`/${route.uid}`}
                // TODO - figure out how to highlight the selected item
                // selected={route.path === currentRoutePath}
                >{route.displayName}</MenuItem>)
            })}
        </MenuList>
    </Menu>))
}
