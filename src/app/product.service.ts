export class ProductService {
  getProducts(){
    return [{
      imageUrl: 'http://loremflickr.com/150/150?random=1',
      productName: 'Product 1',
      releasedDate: 'May 31, 2016',
      description: 'Cras sit amet nibh libera, in gravida...',
      rating: 4,
      numOfreviews: 2
    },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=2',
        productName: 'Product 2',
        releasedDate: 'October 31, 2016',
        description: 'Cras sit amet nibh libera, in gravida...',
        rating: 2,
        numOfreviews: 12

      },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=3',
        productName: 'Product 3',
        releasedDate: 'July 30, 2016',
        description: 'Cras sit amet nibh libera, in gravida...',
        rating: 5,
        numOfreviews: 2

      }
    ];
  }
}
