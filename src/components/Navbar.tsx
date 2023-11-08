'use client'

import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    IconButton,
    HStack


} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'



interface Props {
    children: React.ReactNode
}
const Links = ['Ciphers', 'Blog']


const NavLink = (props: Props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function Simple() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Algo Applier </Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://avatars.githubusercontent.com/u/63257806?s=96&v=4'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                        </Stack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    )
}



//                     <Flex alignItems={'center'}>
//                         <Stack direction={'row'} spacing={7}>
//                             

//                             <Menu>
//                                 <MenuButton
//                                     as={Button}
//                                     rounded={'full'}
//                                     variant={'link'}
//                                     cursor={'pointer'}
//                                     minW={0}>
//                                     <Avatar
//                                         size={'sm'}
//                                         src={'https://avatars.dicebear.com/api/male/username.svg'}
//                                     />
//                                 </MenuButton>
//                                 <MenuList alignItems={'center'}>
//                                     <br />
//                                     <Center>
//                                         <Avatar
//                                             size={'2xl'}
//                                             src={'https://avatars.dicebear.com/api/male/username.svg'}
//                                         />
//                                     </Center>
//                                     <br />
//                                     <Center>
//                                         <p>Username</p>
//                                     </Center>
//                                     <br />
//                                     <MenuDivider />
//                                     <MenuItem>Your Servers</MenuItem>
//                                     <MenuItem>Account Settings</MenuItem>
//                                     <MenuItem>Logout</MenuItem>
//                                 </MenuList>
//                             </Menu>
//                         </Stack>
//                     </Flex>
//                 </Flex>
//             </Box>
//         </>
//     )
// }