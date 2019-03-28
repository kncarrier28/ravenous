const apiKey = 'x0xY5IKcOFAHNkTMfs1pYD-Y__JuLplZNU1a2NmhYrHWiTheI2uzr_19GEl5gKYCFJd3J-I2q3SLQJ29yAqzQSaNHr8Ew55lUrHf4Ipk7GV-blmfYgS9_6iqOEKdXHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.business) {
        return jsonResponse.business.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.cip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }
}

export default Yelp
