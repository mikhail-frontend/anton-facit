import React from 'react';
import Card, {CardBody, CardHeader} from "../../../../components/bootstrap/Card";
import {useSelector} from "react-redux";

const List = () => {
    const coursesList = useSelector((state: any) => state.courses.coursesList);

    return (
        <div className='row g-4'>
            <Card>
                <CardHeader>
                    Course 1
                </CardHeader>
                <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid assumenda
                    blanditiis commodi corporis delectus dolor error excepturi exercitationem expedita iure
                    natus, nemo pariatur perspiciatis quo saepe tempora. Facilis, magnam.
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    Course 1
                </CardHeader>
                <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid assumenda
                    blanditiis commodi corporis delectus dolor error excepturi exercitationem expedita iure
                    natus, nemo pariatur perspiciatis quo saepe tempora. Facilis, magnam.
                </CardBody>
            </Card>
        </div>
    );
};

export default List;