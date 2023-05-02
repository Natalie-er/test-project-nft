import React from 'react';
import advantagesData from './advantagesData';

import Container from '../../components/container';
import Section from '../../components/section';
import Banner from '../../components/banner';
import Circle from '../../components/circle';
import ColorBlock from '../../components/colorBlock';
import Advantages from '../../components/advantages';

import img from '../../images/main-1.png';
import img2x from '../../images/main-1_2x.png';

const renderTitle = () => {
    return (
        <>
            Не упусти возможность войти в 
            <span className="fw-700">прибыльную нишу</span>
        </>
    );
};

const bannerData = {
    title: renderTitle(),
    btnText: 'Начать зарабатывать на NFT',
    image: {
        src: img,
        src2x: img2x,
        alt: 'Не упусти возможность войти в прибыльную нишу',
    },
};

const Main = () => {
    return (
        <>
            <Section mode={['full-height', 'top']}>
                <Container>
                    <Banner {...bannerData}>
                        <p>
                            Получи все нужные навыки для заработка на NFT всего
                            за 28 дней!
                        </p>
                    </Banner>
                </Container>
            </Section>
            <Section mode="light">
                <Container>
                    <ColorBlock>
                        <Circle modName="1" />
                        <Circle modName="2" />
                        <Circle modName="3" />

                        <h2>Что даст тебе обучение?</h2>
                        <Advantages list={advantagesData} />
                    </ColorBlock>
                </Container>
            </Section>
        </>
    );
};

export default Main;
