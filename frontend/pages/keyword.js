import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import PostCard from '../containers/PostCard'
import { Card, Form, Input, List, Comment, Popover, Row, Col, Button, Radio, Empty} from 'antd';
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_HASHTAG_POSTS_REQUEST, LOAD_MY_KEYWORD_REQUEST} from '../reducers/post';
import RenderMultiMedia from '../components/RenderMultiMedia';


const Keyword = ({ tag, searchCondition }) => {
   // console.log("tag : ", tag);
    const dispatch = useDispatch();
    const {mainPosts, hasMorePost, myKeyword } = useSelector( state => state.post );
    const [fixedMainPosts, setFixedMainPosts ] = useState(mainPosts);

    console.log("myKeyword  : ", myKeyword)
    console.log("mainPosts : ", mainPosts);
    console.log("fixedMainPosts : ", fixedMainPosts)

    const onScroll = useCallback( () => {
        if (window.scrollY + document.documentElement.clientHeight 
            > document.documentElement.scrollHeight - 300 ) {
                if (hasMorePost) {
                    dispatch({
                        type: LOAD_HASHTAG_POSTS_REQUEST,
                        lastId: mainPosts[mainPosts.length - 1 ] && mainPosts[mainPosts.length - 1 ].id,
                        data: tag
                    })
                }
            };
    }, [hasMorePost, mainPosts.length]);

    useEffect( () => {
        window.addEventListener('scroll', onScroll);
        return () => {  // 이렇게 해야 호출될때 아래가 실행됨, 본 컴포넌트 나갈때 실행됨
            window.removeEventListener('scroll', onScroll);
        }
    }, [mainPosts.length]); //  빈 deps [], 는 처음 로딩될때 한 번만 호출됨

    useEffect( () => {
        setFixedMainPosts(mainPosts.filter( v => !searchCondition.includes(v.UserAssets[0].dataType)))
    }, [searchCondition]);

    useEffect( () => {
        setFixedMainPosts(mainPosts);
    }, [mainPosts])

    const onChangeMyKeword = e => {
        console.log(" radio 5 checked ", e)
       // setTagValue("etc");
        e.preventDefault();
        dispatch({
            type: LOAD_HASHTAG_POSTS_REQUEST,
            data: e.target.value,
            lastId: 0,  
        })
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center'}}>마이 키워드</h1>
            
            <Button type="danger"  onClick={onChangeMyKeword} value={'undefined'} >전체</Button>
            <Radio.Group onChange={onChangeMyKeword} buttonStyle="solid">
                 
            {myKeyword && myKeyword.map( c => (
                <Radio.Button value={c.keyword} >
                    {c.keyword}{"("+c.aKeywordTotal+")"}
                </Radio.Button>
            ))}
            </Radio.Group>
            {fixedMainPosts.length === 0 ? <Empty /> : 
            fixedMainPosts.map( c => (
                // <p>{console.log("c => ", c) }</p>
                <Row type={"flex"} gutter={8} align={"top"}>
                    <Col span={16}>
                        {/* <Card style={{width: 330}} */}
                        <Card 
                            cover={ //<div> aaaa</div>
                                <RenderMultiMedia fileInfo={c.UserAssets[0]}  />
                            }
                        >
                            <Card.Meta 
                                description={c.description}
                            />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card > 
                            <Card.Meta 
                                description={"dataType : " + c.UserAssets[0].dataType + " / " + 
                                            " 관련키워드: " + c.KeywordTags.map(v => v.keyword + ", ")
                                            + " / 관련설명: " + c.KeywordTags.description
                            }
                            />
                        </Card>
                    </Col>
                </Row>
            ))}
        </div>
    );
};

Keyword.propTypes = {
    //tag: PropTypes.string.isRequired,
};

Keyword.getInitialProps = async (context) => {
    const tag = context.query.tag;
    //console.log('hashtag getInitialProps', context.query.tag);
    context.store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: tag,
    });
    context.store.dispatch({
        type: LOAD_MY_KEYWORD_REQUEST,
        //data: tag,
    });
    return { tag };
}

export default Keyword;