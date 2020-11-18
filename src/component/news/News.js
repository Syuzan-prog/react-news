import React from 'react';
import {Article} from '../article/Article';
import PropTypes from 'prop-types'; 
import './News.css';

class News extends React.Component {

    renderNews = () => {
        const { data } = this.props;
        let newsTemplate = null
        if (data.length) {
            newsTemplate = data.map( item => {
            return <Article key={item.id} data={item}/>
        })
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }
             return newsTemplate
    }
    render() {
        const { data } = this.props
        return (
            <div className='news'>
                {this.renderNews()}
                { 
                    data.length ? <strong  className={'news__count'}>
                    Всего новостей: {data.length}</strong> : null
                }
            </div>
        );
    }
}
    

 News.propTypes = {
            data: PropTypes.array.isRequired 
        }
    
export default News;

