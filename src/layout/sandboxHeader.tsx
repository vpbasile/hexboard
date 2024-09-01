import { Flex, Heading, HStack, Link } from "@chakra-ui/react";
import ColorModeButton from "../components/colorModeButton";
import NavMenu from "../components/navMenu";

export default function Header() {

    return (<Flex id="header" borderBottom={`2px`} marginBottom={'xl'}>
        <HStack>
            <Heading flex={3} as={'h1'}><Link href="/">Hexboard</Link></Heading>
            <NavMenu/>
            <ColorModeButton />
        </HStack>
    </Flex >)
}