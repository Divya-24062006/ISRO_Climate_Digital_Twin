class RecommendationEngine:

    def generate(self, risk):

        recommendations = []

        if risk["flood_risk"] == "High":

            recommendations.append(
                "Strengthen drainage systems and prepare flood response measures."
            )

        if risk["heatwave_risk"] == "High":

            recommendations.append(
                "Increase irrigation and reduce outdoor activities during peak temperatures."
            )

        if risk["drought_risk"] == "High":

            recommendations.append(
                "Promote water conservation and rainwater harvesting."
            )

        if len(recommendations) == 0:

            recommendations.append(
                "No significant climate risks detected."
            )

        return recommendations


recommendation_engine = RecommendationEngine()