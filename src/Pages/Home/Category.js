import CetegoryOptions from './CetegoryOptions';
import { useQuery } from '@tanstack/react-query';

const Category = () => {
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-site-pink.vercel.app/phone-category');
            const data = await res.json();
            return data;
        }
    })
    console.log(categories);

    return (
        <div className='  justify-items-center  grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <CetegoryOptions
                    key={category._id}
                    category={category}
                ></CetegoryOptions>)
            }
        </div>
    );
};

export default Category;