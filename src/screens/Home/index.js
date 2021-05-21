import BetCard           from '../../components/BetCard';
import CarouselContainer from '../../components/CarouselContainer';
import EventBetPill      from '../../components/EventBetPill/index';
import EventCard         from '../../components/EventCard/index';
import ExampleData       from '../../helper/ExampleData';
import Header            from '../../components/Header/index';
import Navbar            from '../../components/Navbar/index';
import styles            from './styles.module.scss';

const Home = () => {

    return (
        <div className={styles.homeContainer}>
            <Navbar user={ExampleData.user} />
            <Header slides={ExampleData.slides} />
            <div className={styles.betPillContainer}>
                <EventBetPill
                    user={ExampleData.user}
                    marketQuestion={'Who will win Red Bull Rampage?'}
                    hotBet={true}
                    eventEnd={new Date(ExampleData.currentDate.getTime() + 70 * 60000)}
                />
                <EventBetPill
                    user={ExampleData.user}
                    marketQuestion={'Will Elon Musk tweet about EVNT token by next week?'}
                    hotBet={true}
                    eventEnd={new Date(ExampleData.currentDate.getTime() + 120 * 60000)}
                />
            </div>
            <CarouselContainer title={'🔥 Most popular Live Events'}>
                <EventCard
                    title={'eSports Alliance'}
                    organizer={'JIB PUBG'}
                    viewers={12345}
                    live={true}
                    tags={['esports', 'shooter']}
                    image={ExampleData.exampleEventImage}
                />
                <EventCard
                    title={'eSports Alliance'}
                    organizer={'JIB PUBG'}
                    viewers={12345}
                    live={true}
                    tags={['esports', 'shooter']}
                    image={ExampleData.exampleEventImage}
                />
                <EventCard
                    title={'eSports Alliance'}
                    organizer={'JIB PUBG'}
                    viewers={12345}
                    live={true}
                    tags={['esports', 'shooter']}
                    image={ExampleData.exampleEventImage}
                />
                <EventCard
                    title={'eSports Alliance'}
                    organizer={'JIB PUBG'}
                    viewers={12345}
                    live={true}
                    tags={['esports', 'shooter']}
                    image={ExampleData.exampleEventImage}
                />
            </CarouselContainer>
            <CarouselContainer title={'🚀 Most popular Bets'}>
                <BetCard
                    image={ExampleData.exampleBetImage}
                    user={ExampleData.user}
                    marketQuestion={'Will Elon Musk tweet about EVNT token by next week?'}
                    hot={true}
                    eventEnd={new Date(ExampleData.currentDate.getTime() + 12 * 60000)}
                />
                <BetCard
                    image={ExampleData.exampleBetImage}
                    user={ExampleData.user}
                    marketQuestion={'Will Elon Musk tweet about EVNT token by next week?'}
                    hot={true}
                    eventEnd={new Date(ExampleData.currentDate.getTime() + 12 * 60000)}
                />
                <BetCard
                    image={ExampleData.exampleBetImage}
                    user={ExampleData.user}
                    marketQuestion={'Will Elon Musk tweet about EVNT token by next week?'}
                    hot={true}
                    eventEnd={new Date(ExampleData.currentDate.getTime() + 12 * 60000)}
                />
                <BetCard
                    image={ExampleData.exampleBetImage}
                    user={ExampleData.user}
                    marketQuestion={'Will Elon Musk tweet about EVNT token by next week?'}
                    hot={true}
                    eventEnd={new Date(ExampleData.currentDate.getTime() + 12 * 60000)}
                />
                <BetCard
                    image={ExampleData.exampleBetImage}
                    user={ExampleData.user}
                    marketQuestion={'Will Elon Musk tweet about EVNT token by next week?'}
                    hot={true}
                    eventEnd={new Date(ExampleData.currentDate.getTime() + 12 * 60000)}
                />
            </CarouselContainer>
        </div>
    );
};

export default Home;