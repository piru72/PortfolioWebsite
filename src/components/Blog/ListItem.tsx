'use client'

import {
    Box,
    WrapItem
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import BlogAuthor from './Authors';
import HeaderSection from './ListItemHeader';
import ShortDescription from './ListItemShortDescription';
import blogData from './Data';



const BlogItem = () => {

    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }
    return (

        <>

            {blogData.map((blogItem) => (
                <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
                    <Box w="100%" onClick={() => navigateTo(blogItem.route)}>


                        <HeaderSection
                            title={blogItem.title}
                            imageSrc={blogItem.imageSrc}
                            tags={blogItem.tags}
                        />

                        <ShortDescription description={blogItem.description} />

                        <BlogAuthor date={blogItem.date} />
                    </Box>


                </WrapItem>
            ))}
        </>


    );
};

export default BlogItem;