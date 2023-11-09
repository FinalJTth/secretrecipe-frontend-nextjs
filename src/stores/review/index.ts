import { types, flow, cast, Instance, getSnapshot } from "mobx-state-tree";
import api from "../../api";

export interface IReview {
  id: string;
  description: string;
  reviewerName: string;
  rating: number;
}

export interface IReviewMST extends Instance<typeof review> {}

export const review = types.model("Review", {
  id: types.string,
  description: types.string,
  reviewerName: types.string,
  rating: types.number,
});

const reviewModel = types
  .model("ReviewModel", {
    reviews: types.array(review),
  })
  .actions(self => {
    // Getter
    const getReviews = (): Array<IReviewMST> => {
      return self.reviews;
    };

    // Setter
    const setReviews = (reviews: Array<IReview>) => {
      self.reviews = cast(reviews);
    };
    return { getReviews, setReviews };
  })
  .actions(self => {
    // API
    const fetchReviewsByRecipeId = flow(function* getRecipeByID(
      reviewId?: number,
    ): Generator<any, any, any> {
      return yield api
        .get(`/reviews${reviewId ? `?${reviewId}` : ``}`)
        .then((res: Record<string, any>) => {
          self.setReviews(
            res.map((review: Record<string, any>) => {
              return {
                id: review.id,
                description: review.description,
                reviewerName: review.reviewerName,
                rating: review.rating,
              };
            }),
          );
          return res;
        });
    });

    return { fetchReviewsByRecipeId };
  })
  .create({
    reviews: [],
  });

export default reviewModel;
