import { Box, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { boardList } from '../App-definitions';
export default function BoardIndex() {

    return (<Box>
        <Heading as={'h2'}>Board Index</Heading>
        <List>
            {boardList.map((eachBoard) => {
                const path = `/${eachBoard.uid}`;
                return (<ListItem key={path}><Link to={path}>{eachBoard.displayName}</Link></ListItem>);
            })}
        </List>
    </Box>)
}