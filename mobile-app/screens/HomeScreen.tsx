import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Star, Clock, Plus } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const featuredRestaurants = [
  {
    id: 1,
    name: 'Italian Bistro',
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    deliveryTime: '25-30 min',
    category: 'Italian',
    distance: '0.8 km',
    promoted: true,
  },
  {
    id: 2,
    name: 'Sushi Master',
    image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    deliveryTime: '30-35 min',
    category: 'Japanese',
    distance: '1.2 km',
    promoted: false,
  },
  {
    id: 3,
    name: 'Burger House',
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    deliveryTime: '20-25 min',
    category: 'American',
    distance: '0.5 km',
    promoted: true,
  },
];

const categories = [
  { id: 1, name: 'Pizza', icon: '🍕' },
  { id: 2, name: 'Burgers', icon: '🍔' },
  { id: 3, name: 'Sushi', icon: '🍣' },
  { id: 4, name: 'Italian', icon: '🍝' },
  { id: 5, name: 'Chinese', icon: '🥡' },
  { id: 6, name: 'Desserts', icon: '🍰' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning!</Text>
            <View style={styles.locationContainer}>
              <MapPin size={16} color="#FF6B35" />
              <Text style={styles.location}>123 Main St, New York</Text>
            </View>
          </View>
        </View>

        {/* Promotion Banner */}
        <View style={styles.promoContainer}>
          <View style={styles.promoBanner}>
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>Free Delivery</Text>
              <Text style={styles.promoSubtitle}>On orders over $25</Text>
              <TouchableOpacity style={styles.promoButton}>
                <Text style={styles.promoButtonText}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryItem}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Restaurants */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Restaurants</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {featuredRestaurants.map((restaurant) => (
            <TouchableOpacity key={restaurant.id} style={styles.restaurantCard}>
              {restaurant.promoted && (
                <View style={styles.promotedBadge}>
                  <Text style={styles.promotedText}>Promoted</Text>
                </View>
              )}
              <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <Text style={styles.restaurantCategory}>{restaurant.category}</Text>
                <View style={styles.restaurantMeta}>
                  <View style={styles.metaItem}>
                    <Star size={14} color="#FFD700" fill="#FFD700" />
                    <Text style={styles.metaText}>{restaurant.rating}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Clock size={14} color="#9CA3AF" />
                    <Text style={styles.metaText}>{restaurant.deliveryTime}</Text>
                  </View>
                  <Text style={styles.metaText}>• {restaurant.distance}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Plus size={20} color="#FF6B35" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  promoContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  promoBanner: {
    backgroundColor: '#FF6B35',
    borderRadius: 16,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  promoContent: {
    zIndex: 1,
  },
  promoTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  promoSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 16,
  },
  promoButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    color: '#FF6B35',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  seeAll: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: '600',
  },
  categoriesContainer: {
    paddingLeft: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    position: 'relative',
  },
  promotedBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 1,
  },
  promotedText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  restaurantImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  restaurantInfo: {
    padding: 16,
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  restaurantCategory: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  restaurantMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  addButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#FFF7F3',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
});