import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments} from '../../redux/actionCreator';
import Loading from './Loading';
import { Alert } from 'reactstrap';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
       this.props.fetchDishes();
       this.props.fetchComments();
    }

    render() {
        document.title = "Menu";
        console.log("err",this.props);
        if (this.props.dishes.isLoading) {
            return (
                <Loading/>
            );
        }

        else if (this.props.dishes.errMess != null) {
            return (
                <Alert color='danger'>Error Loading</Alert>
            );
        }
        
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem
                        dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)}
                    />
                );
            })

            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.comments.filter(comment => comment.dishId === this.state.selectedDish.id
                )
                dishDetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment}
                    commentsIsLoading = {this.props.isLoading} />
            }
            return (
                <div className="container">
                    <div className="row">
                        <div className='row justify-content-md-center"'>
                            {menu}
                        </div>
                        <Modal style={{scrollable:"true"}} isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);