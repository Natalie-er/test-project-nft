import React from 'react';
// import './styles.scss'; // TODO
import Container from '../../components/container';
import Section from '../../components/section';
import Banner from '../../components/banner';
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
                    <div>Что даст тебе обучение?</div>
                </Container>
            </Section>
        </>
    );
};

export default Main;
